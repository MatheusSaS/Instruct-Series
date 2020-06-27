import React, { useState } from "react";
import Course3 from "../ui/friendsF.jpg";
import video1 from "../ui/videos/STRANGERTHINGS.mp4";

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
function CoursePage(props) {
  const [Course, setCourse] = useState({
    ID: 1,
    title: "Aprenda ingles com Stranger Things!!",
    texto:
      "As séries de TV são ótimas alternativas para aprender inglês. Quem é fã de carteirinha de Friends, por exemplo, sabe que pode aumentar a bagagem sobre o idioma e até mesmo fixar algum conteúdo específico, como gírias ou até mesmo expressões comuns em conversas do dia a dia com Chandler, Mônica, Phoebe, Joey, Ross e Rachel.As conversas entre esses seis amigos contam com um vocabulário simples e do cotidiano. Isso facilita aquele famoso treino do ouvido para se familiarizar com a língua e tornar o aprendizado ainda mais rápido",
    tutor: {
      ID: 1,
      name: "nome da serie",
      dp: "https://placeimg.com/100/100/people?tutor-" + 1,
    },
    duration: "83 min",
    poster: Course3,
    videos: [
      {
        ID: 1,
        title: "Friends",
        duration: "15min",
      },
      {
        ID: 2,
        title: "Treinar listening",
        duration: "100%",
      },
      {
        ID: 3,
        title: "Ficar por dentro das gírias",
        duration: "100%",
      },
    ],
  });
  const courseID = props.match.params.courseid;

  var courseVideos = [];
  for (let i = 0; i < Course.videos.length; i++) {
    courseVideos.push(
      <a href="#" key={"course-video-" + i} className="noul aic rel flex">
        <div className="id s18 fontn cfff">{Course.videos[i].ID}</div>
        <div className="meta rel">
          <h1 className="s15 lbl fontb c333">{Course.videos[i].title}</h1>
          <h1 className="s15 dur fontn c777">{Course.videos[i].duration}</h1>
        </div>
      </a>
    );
  }

  return (
    <div className="curse-page rel flex">
      <div className="couse-info rel">
        <div className="user rel aic flex">
          <div className="pic">
            <img src={Course.tutor.dp} className="bl" />
          </div>
          <div className="meta rel">
            <h2 className="s15 fontb name c333">{Course.tutor.name}</h2>
          </div>
        </div>
        <div className="course-meta">
          <h2 className="s24 title fontB name c333">{Course.title}</h2>
          <p
            className="s18 about fontn c777"
            dangerouslySetInnerHTML={{ __html: Course.texto }}
          />
        </div>
        <div className="section section-b rel">
          <h2 className="title s24 fontB">
            Detalhes <span className="fontn">do Curso</span>
          </h2>
          <div className="courses-videos aic flex">{courseVideos}</div>
        </div>
      </div>
      <div className="course-preview rel">
        <div className="player rel">
          <video controls>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        <div className="extras-block rel flex">
          <div className="chat rel ">
            <div className="section section-b rel">
              <h2 className="title s24 fontB">
                Chat <span className="fontn">Box</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CoursePage;
