export interface CertificateProps {
  name: string;
  certificate_url: string;
  company: string;
  logo: string | null;
  issued: string;
  expired: string | null;
  credential_id: string | null;
  credential_url: string | null;
}
