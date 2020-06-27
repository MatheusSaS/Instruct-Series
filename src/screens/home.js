import React, { useState } from "react";
import Course1 from "../ui/fundo.png";
import Course2 from "../ui/himymF.jpg";
import Course3 from "../ui/friendsF.jpg";
import Course4 from "../ui/eapcF.jpg";
import Course5 from "../ui/tmocF.jpg";
import Course6 from "../ui/stF.jpg";
import Course7 from "../ui/gotF.jpg";

import { NavLink } from "react-router-dom";

/*
    Imgem superior e nome
      <div className="pic">
              <img src={popularCourse[i].tutor.dp} className="bl" />
            </div>
            <div className="meta rel">
              <h2 className="s15 fontb name cfff">
                {popularCourse[i].tutor.name}
              </h2>
            </div>
 */
function HomePage() {
  const [popularCourse, setPopularCourse] = useState([
    {
      ID: 1,
      title: "Aprenda ingles com Stranger Things!!",
      tutor: {
        ID: 1,
        name: "nome da serie",
        dp: "https://placeimg.com/100/100/people?tutor-" + 1,
      },
      duration: "83 min",
      poster: Course6,
    },
    {
      ID: 2,
      title: "Aprenda ingles com How i met your mother!!",
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
      title: "Aprenda ingles com Friends!!",
      tutor: {
        ID: 3,
        name: "nome da serie",
        dp: "https://placeimg.com/100/100/people?tutor-" + 3,
      },
      duration: "83 min",
      poster: Course3,
    },
  ]);

  const [popularCourse2, setPopularCourse2] = useState([
    {
      ID: 4,
      title: "Aprenda ingles com Todo mundo odeia o cris!!",
      tutor: {
        ID: 1,
        name: "nome da serie",
        dp: "https://placeimg.com/100/100/people?tutor-" + 1,
      },
      duration: "83 min",
      poster: Course5,
    },
    {
      ID: 5,
      title: "Aprenda ingles com Eu, a patroa e as crianças!",
      tutor: {
        ID: 2,
        name: "nome da serie",
        dp: "https://placeimg.com/100/100/people?tutor-" + 2,
      },
      duration: "83 min",
      poster: Course4,
    },
    {
      ID: 6,
      title: "Aprenda ingles Game of Thrones!",
      tutor: {
        ID: 3,
        name: "nome da serie",
        dp: "https://placeimg.com/100/100/people?tutor-" + 3,
      },
      duration: "83 min",
      poster: Course7,
    },
  ]);

  //live tutor list
  var tutorList = [];
  for (let i = 0; i < 10; i++) {
    tutorList.push(
      <button className="tutor rel" key={"tutor-live-" + i}>
        <img src={"https://placeimg.com/100/100/people?" + i} className="bl" />
      </button>
    );
  }
  //
  var curseList = [];
  for (let i = 0; i < popularCourse.length; i++) {
    curseList.push(
      <NavLink
        to={"/course/" + popularCourse[i].ID}
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

  var curseList2 = [];
  for (let i = 0; i < popularCourse2.length; i++) {
    curseList2.push(
      <NavLink
        to={"/course/" + popularCourse2[i].ID}
        className="curse rel"
        key={"popular-course-" + i}
      >
        <div
          className="block rel"
          style={{
            background:
              "#e2e2e2 url(" + popularCourse2[i].poster + ") no-repeat center",
          }}
        >
          <div className="user abs aic flex"></div>
          <div className="course-title abs">
            <h2 className="s15 fontb name cfff">{popularCourse2[i].title}</h2>
          </div>
        </div>
      </NavLink>
    );
  }

  return (
    <div className="home-page rel">
      {/* MAIS VISTOS */}
      <div className="section rel">
        <h2 className="title s24 fontB">
          Videos <span className="fontn">Mais Vistos</span>
        </h2>
        <div className="tutors rel flex">{tutorList}</div>
      </div>
      {/**VIDEOS POPULARES */}
      <div className="section section-b rel">
        <h2 className="title s24 fontB">
          Videos <span className="fontn">Populares</span>
        </h2>
        <div className="courses rel flex">{curseList}</div>
      </div>
      {/**VIDEOS POPULARES2 */}
      <div className="section section-c rel">
        <div className="courses rel flex">{curseList2}</div>
      </div>
    </div>
  );
}
export default HomePage;
