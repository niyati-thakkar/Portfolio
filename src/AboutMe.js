import React from 'react';
import SubHead from "./SubHead";
function AboutMe({aboutRef}){
    return(
        <div className="aboutMe row" ref={aboutRef}>
                <SubHead head="ABOUT"/>
                <div className="subHeadParentPara col">
                <div className="subHeadPara">I am currently pursuing my Bachelor's of Engineering in Computer Science from L. D. College of Engineering, Ahmedabad. I am passionate about programming and technology. I enjoy solving DSA problems and Sudoku puzzles.</div>
                <div className="subHeadPara"> Currently, I am exporing <b>Web Development</b> as well as working as a freelance <b>Technical Content Writer</b> at <b>Scaler</b>. I have written more than 70 articles on complex topics of Data Structures, Algorithms, Programming Languages (Python, C++, Java, CSS, etc.), DBMS, etc.</div>
                <div className="subHeadPara">I am open to making new connections, opportunities, and projects. Feel free to Connect or Follow on <b><a href="#">LinkedIn</a></b>.</div>
                </div>
                <div className="col subHeadParentPara">
                <div className="skillHead">Techincal Skills</div>
                    <ul>
                        <li className="skillClass">Java</li>
                        <li className="skillClass">Python</li>
                        <li className="skillClass">C/C++</li>

                        <li className="skillClass">HTML</li>
                        <li className="skillClass">CSS</li>
                        <li className="skillClass">JavaScript</li>
                        <li className="skillClass">Bootstrap</li>
                        <li className="skillClass">NodeJS</li>
                        <li className="skillClass">ExpressJS</li>
                        <li className="skillClass">MongoDB</li>                        
                        <li className="skillClass">ReactJS</li>

                        <li className="skillClass">Git, GitHub</li>
                        <li className="skillClass">DSA</li>
                        <li className="skillClass">RDBS, MySQL</li>
                    </ul>
                </div>
        </div>

    );
}
export default AboutMe;