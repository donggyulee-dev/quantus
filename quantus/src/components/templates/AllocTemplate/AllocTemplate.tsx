import React from "react";

import * as S from "./AllocTemplate.style";
import AllocBodyOrganisms from "../../organisms/AllocBodyOrganisms";
import AllocFooterOrganisms from "../../organisms/AllocFooterOrganisms";
import AllocGnbOrganisms from "../../organisms/AllocGnbOrganisms";
import AllocInputOrganisms from "../../organisms/AllocInputOrganisms";
import AllocMenuOrganisms from "../../organisms/AllocMenuOrganisms";

const AllocTemplate = () => {
  return (
    <>
      <S.FixWrap>
        <AllocGnbOrganisms />
        <AllocMenuOrganisms />
        <AllocInputOrganisms />
      </S.FixWrap>
      <S.Space />
      <AllocBodyOrganisms />
      <AllocFooterOrganisms />
    </>
  );
};

export default AllocTemplate;
