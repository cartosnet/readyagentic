import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface WelcomeEmailProps {
  username: string;
  loginUrl?: string;
}

export const WelcomeEmail = ({
  username = 'there',
  loginUrl = 'https://www.readyagentic.com/login',
}: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Bienvenue sur ReadyAGentinc - Votre voyage commence ici !</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Bienvenue sur ReadyAGentinc ! 🚀</Heading>
          
          <Text style={text}>Bonjour {username},</Text>
          
          <Text style={text}>
            Nous sommes ravis de vous accueillir ! Merci d'avoir choisi ReadyAGentinc
            pour vos besoins professionnels. Notre plateforme est conçue pour vous aider
            à atteindre vos objectifs et optimiser vos opérations.
          </Text>

          <Section style={buttonContainer}>
            <Button style={button} href={loginUrl}>
              Commencer
            </Button>
          </Section>

          <Text style={text}>
            Voici les prochaines étapes :
          </Text>

          <ul style={list}>
            <li>Complétez votre profil</li>
            <li>Découvrez nos fonctionnalités</li>
            <li>Consultez notre documentation</li>
            <li>Rejoignez notre communauté</li>
          </ul>

          <Hr style={hr} />

          <Text style={footer}>
            Si vous avez des questions, n'hésitez pas à{' '}
            <Link href="mailto:matthieu.doer@gmail.com" style={link}>
              contacter notre équipe support
            </Link>
            . Nous sommes là pour vous aider !
          </Text>

          <Text style={socialLinks}>
            <Link href="https://www.readyagentic.com" style={link}>
              Visitez notre site
            </Link>
            {/* Espace réservé pour les futurs liens sociaux */}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const h1 = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.25',
  padding: '0 48px',
};

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
  padding: '0 48px',
};

const buttonContainer = {
  padding: '27px 0 27px',
};

const button = {
  backgroundColor: '#5850ec',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
  padding: '12px 0',
};

const list = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  padding: '0 48px',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '20px 0',
};

const footer = {
  color: '#666666',
  fontSize: '14px',
  lineHeight: '24px',
  padding: '0 48px',
};

const link = {
  color: '#5850ec',
  textDecoration: 'underline',
};

const socialLinks = {
  textAlign: 'center' as const,
  padding: '20px 48px 0',
  color: '#666666',
  fontSize: '14px',
}; 