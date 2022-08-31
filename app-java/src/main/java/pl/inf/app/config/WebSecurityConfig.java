package pl.inf.app.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import pl.inf.app.bm.employee.control.EmployeeRepositoryBA;

import static pl.inf.app.bm.employee.entity.EmployeeBE.Role.ROLE_ADMIN;
import static pl.inf.app.bm.employee.entity.EmployeeBE.Role.ROLE_EMPLOYEE;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final EmployeeRepositoryBA employeeRepository;

    @Override
    protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(email -> employeeRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("User with email %s not found", email))))
                .passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(final HttpSecurity http) throws Exception {
        // @formatter:off
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers("/api/rooms/search", "/api/offers/active").permitAll()
                .antMatchers(HttpMethod.POST, "/api/reservations/*").permitAll()
                .antMatchers("/swagger-ui/**").hasAnyAuthority(ROLE_ADMIN.getAuthority(), ROLE_EMPLOYEE.getAuthority())
                .antMatchers("/admin", "/api/employees/**", "/api/offers/**", "/api/rooms/**").hasAuthority(ROLE_ADMIN.getAuthority())
                .antMatchers("/employee", "/api/reservations/**").hasAuthority(ROLE_EMPLOYEE.getAuthority())
                .anyRequest().permitAll()
                .and()
                .formLogin()
                .loginPage("/?login=true")
                .loginProcessingUrl("/api/perform_login")
                .successHandler((request, response, authentication) -> {
                    if (authentication.getAuthorities().stream().anyMatch(ROLE_ADMIN::equals)) {
                        response.sendRedirect("/admin");
                    } else if (authentication.getAuthorities().stream().anyMatch(ROLE_EMPLOYEE::equals)) {
                        response.sendRedirect("/employee");
                    } else {
                        response.sendRedirect("/");
                    }
                })
                .failureUrl("/?error=true")
                .and()
                .logout()
                .logoutUrl("/api/perform_logout")
                .logoutSuccessHandler((request, response, authentication) -> response.sendRedirect("/"))
                .deleteCookies("JSESSIONID");
        // @formatter:on
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
