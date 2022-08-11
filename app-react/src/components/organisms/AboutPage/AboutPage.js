import React from 'react';
import { Title, SectionHeader, TextSpan, MapWrapper } from './AboutPage-styled';
import '@fontsource/montserrat';

const AboutPage = () => {
  return (
    <>
      <Title>O nas</Title>
      <TextSpan>
        Położony w centrum Łodzi, Bookify Hotel Łódź skupia w sobie nowoczesny design, młodą sztukę i architekturę w najlepszym wydaniu. Dzięki
        centralnej lokalizacji, w zasięgu spaceru jest główny deptak Łodzi, czyli Piotrkowska, ale też łódzkie Muzeum Sztuki.
      </TextSpan>
      <SectionHeader>Godziny przyjazdu i wyjazdu</SectionHeader>
      <TextSpan>
        Przyjazd: 14:00
        <br />
        Wyjazd: 10:00
      </TextSpan>
      <SectionHeader>Parking</SectionHeader>
      <TextSpan>Parking dodatkowo płatny – bez rezerwacji miejsca.</TextSpan>
      <SectionHeader>Adres</SectionHeader>
      <TextSpan>Bohdana Stefanowskiego 18/22, 90-001 Łódź.</TextSpan>
      <MapWrapper>
        <iframe
          title="map"
          width="500"
          height="300"
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJw1ZTudk0GkcRrE85kbbpmYM&key=AIzaSyCvv8EugyNby3WVoh8FGB_fSrJlz0Q9Lpo"
        ></iframe>
      </MapWrapper>
    </>
  );
};

export default AboutPage;
