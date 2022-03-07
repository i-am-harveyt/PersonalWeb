import React from "react";
import "../Styles/Work.css"
import ContentBlock from "../Components/ContentBlock/ContentBlock"
import "../Components/ContentBlock/ContentBlock.css"

export default function Work() {
  return (
    <div className="works">
      <div className="blocks">
      <ContentBlock title="1. Personal Website"/>
      <ContentBlock title="2. GenoMaker"/>
      <ContentBlock title="3. Tiny Shooting"/>
      <ContentBlock title='4. '/>
      <ContentBlock title='5. '/>
      <ContentBlock title='6. '/>
      <ContentBlock title='7. '/>
      </div>
    </div>
  );
}
