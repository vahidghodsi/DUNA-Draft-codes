
import Title from "@components/modular/elements/title";
// import GraphicSet from "@components/Graphics/graphic-set";

const UITitles = () => {

  return (
    <div className="_h-100">
      <div className="_container _flex-grow1" style={{}}>
        <div className="_spacer-50"></div>
        <div>
          <Title />
          <Title>A Name</Title>
          <Title icon="client">A Name and an Icon</Title>
          <Title icon="client" state="active">
            A Name and an Icon, actvie
          </Title>
          <Title link icon="client" state="checked">
            A Name and an Icon, checked
          </Title>
          <Title link icon="client" state="selected">
            A Name and an Icon, selected
          </Title>
          <Title icon="client" info="an information text">
            A Name and an Icon, with info
          </Title>
          <Title icon="client" info="an information text">
            <span>A Name and an Icon, with info</span>
            {/* <div className="_title_info"> A discription text comes here</div>
          <dd> more explanation about the item</dd> */}
          </Title>
          <Title icon="architect" link>
            <span className="info">A Name and an Icon, with info</span>
            <span className="top-content">a desc on top</span>
            <span className="sub-content">A description text comes here</span>
            ttttt
            <span className="__F-bold"> this is the item </span>
          </Title>
          <Title icon="architect" state="selected">
            <span className="top-content">level 5</span>
            <span className="__F-bold"> Vahid Ghodsi </span>
            <div className="info">
              <h4>This is the name everybody can see.</h4>
              <h5>you can change this in settings.</h5> <a style={{ color: "var(--color-info)" }}>click here </a>
            </div>
            <span className="sub-content"> recently participated in 2 rounds </span>
          </Title >
          <Title sm {...{content:"A title with config", subContent: <span>do it now</span>, icon:"project-brief", link: true}}/>
        </div>
      </div>
    </div>
  );
};

export default UITitles;
