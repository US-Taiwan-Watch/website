import Image from "next/image";

interface ULogoProps {
  className?: string;
  size: "small" | "medium" | "large" | "xlarge";
}

const LOGO_SRC_MAP = {
  small: "/assets/logo/ustw-logo-small.gif",
  medium: "/assets/logo/ustw-logo-medium.gif",
  large: "/assets/logo/ustw-logo-large.gif",
  xlarge: "/assets/logo/ustw-logo-xlarge.gif",
} as const;

const LOGO_SIZE_MAP = {
  small: 32,
  medium: 48,
  large: 64,
  xlarge: 96,
} as const;

const ULogo = ({ size, className }: ULogoProps) => {
  return (
    <Image
      className={className}
      src={LOGO_SRC_MAP[size]}
      alt="USTW Logo"
      width={LOGO_SIZE_MAP[size]}
      height={LOGO_SIZE_MAP[size]}
    />
  );
};

export default ULogo;
