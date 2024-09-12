"use client";

import UHStack from "@/common/components/atoms/UHStack";
import ULinkText from "@/common/components/atoms/ULinkText";
import { StackProps, Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

export type SectionTitleWithLinkProps = {
  title?: string;
  titleProps?: TypographyProps;
  renderTitle?: () => ReactNode;
  link?: string;
  containerProps?: StackProps;
};

const SectionTitleWithLink = ({
  title,
  renderTitle,
  link,
  containerProps,
  titleProps,
}: SectionTitleWithLinkProps) => {
  return (
    <UHStack
      justifyContent="space-between"
      alignItems="flex-end"
      {...containerProps}
    >
      {renderTitle ? (
        renderTitle()
      ) : (
        <Typography variant="h2" fontWeight={500} {...titleProps}>
          {title}
        </Typography>
      )}
      {link && <ULinkText link={link} />}
    </UHStack>
  );
};

export default SectionTitleWithLink;
