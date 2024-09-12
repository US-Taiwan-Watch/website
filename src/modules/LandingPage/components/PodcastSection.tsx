"use client";

import LandingSectionWrapper from "@/common/components/elements/Landing/LandingSectionWrapper";
import SectionTitleWithLink from "@/common/components/elements/Landing/SectionTitleWithLink";
import { OVERLAPPED_SECTION_PADDING_BOTTOM } from "@/modules/LandingPage/constants";
import IndexPodcastCards from "@/modules/Podcast/components/IndexPodcastCards";

const PodcastSection = () => {
  return (
    <LandingSectionWrapper
      contentWrapperSx={{
        paddingBottom: `${OVERLAPPED_SECTION_PADDING_BOTTOM}px`,
      }}
    >
      <SectionTitleWithLink title="Podcast" />
      <IndexPodcastCards />
    </LandingSectionWrapper>
  );
};

export default PodcastSection;
