import * as React from "react";
import { graphql } from "gatsby";
import { MemberType, Members } from "client/components/templates/Members";
import { MembersTabType } from "client/types/tabs";
import { JoinedGenerationType } from "server/utils/constants";

export const query = graphql`
  query MembersQuery {
    allMembersJson {
      nodes {
        name
        nameNotations {
          lastName
          firstName
          lastNameEn
          firstNameEn
        }
        join
        graduation {
          isGraduated
          graduatedDate
        }
        profileImage {
          large
          small
        }
      }
    }
  }
`;

interface MembersData {
  data: {
    allMembersJson: {
      nodes: {
        name: string;
        nameNotations: {
          lastName: string;
          firstName: string;
          lastNameEn: string;
          firstNameEn: string;
        };
        join: JoinedGenerationType;
        graduation: {
          isGraduated: boolean;
          graduatedDate: string;
        };
        profileImage: {
          large: string;
          small: string;
        };
      }[];
    };
  };
  pageContext: {
    currentTab: MembersTabType;
    locale: string;
  };
}

const MembersContainer = ({
  data: { allMembersJson },
  pageContext: { currentTab },
}: MembersData) => {
  const allMembers = React.useMemo(() => {
    let membersData: {
      first: MemberType[];
      second: MemberType[];
      third: MemberType[];
      fourth: MemberType[];
      graduated: MemberType[];
    } = {
      first: [],
      second: [],
      third: [],
      fourth: [],
      graduated: [],
    };

    if (allMembersJson) {
      const { nodes } = allMembersJson;

      membersData = {
        first: nodes.filter(
          member =>
            member.join === JoinedGenerationType.First &&
            !member.graduation.isGraduated
        ),
        second: nodes.filter(
          member =>
            member.join === JoinedGenerationType.Second &&
            !member.graduation.isGraduated
        ),
        third: nodes.filter(
          member =>
            member.join === JoinedGenerationType.Third &&
            !member.graduation.isGraduated
        ),
        fourth: nodes.filter(
          member =>
            member.join === JoinedGenerationType.Fourth &&
            !member.graduation.isGraduated
        ),
        graduated: nodes
          .filter(member => member.graduation.isGraduated)
          .sort(
            (memberA, memberB) =>
              new Date(memberB.graduation.graduatedDate).getTime() -
              new Date(memberA.graduation.graduatedDate).getTime()
          ),
      };
    }

    return membersData;
  }, [allMembersJson]);

  const members = React.useMemo(() => {
    switch (currentTab) {
      case MembersTabType.FirstGeneration:
        return allMembers.first;
      case MembersTabType.SecondGeneration:
        return allMembers.second;
      case MembersTabType.ThirdGeneration:
        return allMembers.third;
      case MembersTabType.FourthGeneration:
        return allMembers.fourth;
      case MembersTabType.Graduated:
        return allMembers.graduated;
      default:
        return allMembers.first;
    }
  }, [currentTab, allMembers]);

  return allMembersJson ? (
    <Members page={currentTab} members={members} />
  ) : null;
};

export default MembersContainer;
