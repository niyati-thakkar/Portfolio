
import Topic from "./ArticlesTopic";
import PageHead from "./PageHead";
import "./styles.css";
function Articles() {
  return (
    <div className="articlesMain">
      <PageHead title=".articles" content="Here are all the published artilces on the web."/>
<Topic title = "Java"/>
<Topic title = "Kotlin" />
<Topic title = "Python" />
<Topic title = "Git" />
<Topic title = "Bootstrap" />
<Topic title = "DSA" />
<Topic title = "Cpp" />
<Topic title = "Database" />
<Topic title = "HTML" />
<Topic title = "CSS" />
    </div>
  );
}
export default Articles;