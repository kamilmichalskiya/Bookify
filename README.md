#####Kroki potrzebne do uruchomienia całej aplikacji:
1. Uruchomienie skryptu _run_db_ z katalogu _localdeployment_ - będąc w katalogu _localdeployment_ użyć polecenia: `./run_db.sh` 

    **Do uruchomienia niezbędne jest zainstalowanie aplikacji _DockerDesktop_**.
2. Następnie, aby uruchomić całą aplikację, należy w katalogu głównym projektu użyć polecenia:
   
   `./mvnw.cmd clean spring-boot:run -Dspring-boot.run.profiles=local` 
