import React, { useState } from "react";
import Course1 from "../ui/acessibilidadeNaWEB.png";
import Course2 from "../ui/acessibilidadeNaWEB2.png";
import Course3 from "../ui/acessibilidadeNaWEB3.png";
import { NavLink } from "react-router-dom";

function Rightbar() {
  const [popularCourse, setPopularCourse] = useState([
    {
      ID: 1,
      title:
        "Acessibilidade na Web: tudo o que você precisa saber sobre o assunto!",
      tutor: {
        ID: 1,
        name: "nome da serie",
        dp: "https://placeimg.com/100/100/people?tutor-" + 1,
      },
      duration: "83 min",
      poster: Course1,
    },
    {
      ID: 2,
      title: "Acessibilidade na web: o Que é e Quais São as Suas Diretrizes",
      tutor: {
        ID: 2,
        name: "nome da serie",
        dp: "https://placeimg.com/100/100/people?tutor-" + 2,
      },
      duration: "83 min",
      poster: Course2,
    },
    {
      ID: 3,
      title: "Aprenda ingles com Eu,a patroa e as crianças!!",
      tutor: {
        ID: 3,
        name: "nome da serie",
        dp: "https://placeimg.com/100/100/people?tutor-" + 3,
      },
      duration: "83 min",
      poster: Course3,
    },
  ]);

  var curseList = [];
  for (let i = 0; i < popularCourse.length; i++) {
    curseList.push(
      <NavLink
        to={"/artigo/" + +popularCourse[i].ID}
        className="curse rel"
        key={"popular-course-" + i}
      >
        <div
          className="block rel"
          style={{
            background:
              "#e2e2e2 url(" + popularCourse[i].poster + ") no-repeat center",
          }}
        >
          <div className="user abs aic flex"></div>
          <div className="course-title abs">
            <h2 className="s15 fontb name cfff">{popularCourse[i].title}</h2>
          </div>
        </div>
      </NavLink>
    );
  }

  return (
    <div className="rightbar rel">
      <div className="section rel">
        <h2 className="title s24 fontB">
          Busca <span className="fontn">Avançada</span>
        </h2>
        <div className="search-box rel flex">
          <input type="text" placeholder="Buscar" className="qry s15 fontB" />
          <button className="go s15 cfff fontB">Buscar</button>
        </div>
      </div>

      <div className="section section-b rel">
        <div className="courses rel flex">
          <div className="course-a">{curseList[0]}</div>
          <div className="flex cols">
            {curseList[1]}
            {curseList[2]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
