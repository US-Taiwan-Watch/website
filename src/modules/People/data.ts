import { Congress } from "@/common/classes/Congress";
import { Party } from "@/common/enums/Party";
import { People } from "@/modules/People/classes/People";
import { PeoplePosition } from "@/modules/People/enums/PeoplePosition";

const people = new People({
  id: "1",
  name: "Ami Bera",
  image: "/assets/category1.jpg",
  description:
    "Nunn is the representative for Iowa’s 3rd congressional district (view map) and is a Nunn is the representative for Iowa’s 3rd congressional district (view map) and is a Nunn is the representative for Iowa’s 3rd congressional district (view map) and is a ...",
  tags: ["tag", "tag2", "tag3", "tag4"],
  party: Party.DEMOCRAT,
  position: PeoplePosition.SENATOR,
  congress: new Congress({
    congressNumber: 118,
    startYear: 2023,
    endYear: 2025,
    houseMembers: 100,
    houseDistribution: new Map([
      [Party.DEMOCRAT, 50],
      [Party.REPUBLICAN, 50],
    ]),
    senateMembers: 100,
    senateDistribution: new Map([
      [Party.DEMOCRAT, 50],
      [Party.REPUBLICAN, 50],
    ]),
  }),
});

export default people;
