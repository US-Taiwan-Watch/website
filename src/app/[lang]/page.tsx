import Container from "@mui/material/Container";
import IndexKvCards from "@/common/components/elements/IndexKvCards";
import { Stack } from "@mui/material";
import ArticleSection from "@/modules/LandingPage/components/ArticleSection";
import KetagalanSection from "@/modules/LandingPage/components/KetagalanSection";
import PodcastSection from "@/modules/LandingPage/components/PodcastSection";
import FreeUsageSection from "@/modules/LandingPage/components/FreeUsageSection";
import BillSection from "@/modules/LandingPage/components/BillSection";
import { SECTION_OVERLAP_PX } from "@/modules/LandingPage/constants";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Stack alignContent="center" justifyContent="center">
        <IndexKvCards />
        <BillSection />
        <ArticleSection />
        <Stack
          sx={{
            "& > *": {
              marginTop: `-${SECTION_OVERLAP_PX}px`,
            },
          }}
        >
          <KetagalanSection />
          <PodcastSection />
          <FreeUsageSection />
        </Stack>
      </Stack>
    </Container>
  );
}
