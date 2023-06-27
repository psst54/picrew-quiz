"use client";

import Frame from "@components/Frame";
import { Background } from "@styles/styles";

const SessionPage = ({ params }: { params: { slug: string } }) => {
  return (
    <Background>
      <Frame>
        <div>{params.slug}</div>
      </Frame>
    </Background>
  );
};

export default SessionPage;
