import React, { useEffect, useState } from "react";
import "./HomePage.css";

import homeLogo from "./images/homeLogo.png";
import team7Big from "./images/team7Big.png";
// Импорты для первой книги
import narutoFirst from "./images/narutoFirst.png";
import firstArcYear from "./images/year_1999 1.png";
import firstArcTitle from "./images/01-title.png";
import znakLista from "./images/znakLista.png";
import mangaFirstLeft from "./images/mangaFirstLeft.png";
import mangaFirstTopCenter from "./images/mangaFirstTopCenter.png";
import mangaFirstRight from "./images/mangaFirstRight.png";
import mangaFirstKissNearSasuke from "./images/MangaFirstKissNearSasuke.png";
import mangaFirstSasukePic from "./images/MangaFirstSasuke.png";
import mangaFirstTextUnderSasuke from "./images/caption_a 1.png";
import mangaFirstSakuraPic from "./images/MangaFirstSakura.png";
import mangaFirstKakashiNearSakura from "./images/mangaFirstKakashiNearSakura.png";
import mangaFirstTextUnderSakura from "./images/caption_b 1.png";
import mangaFirstBubenchiki from "./images/MangaFirstBubenchiki.png";
import mangaFirstTextPodBubenchikami from "./images/caption_c 1.png";

// Импорты для второй книги
import hakuPic from "./images/hakuPic.png";
import mangaTitle2 from "./images/mangaTitle2.png";
import ZabuzaUnderHaku from "./images/ZabuzaUnderHaku.png";
import textUnderZabuza from "./images/TextUnderZabuza.png";
import GrandpaWithSake from "./images/GrandpaWithSake.png";
import hakuWithoutMask from "./images/hakuWithoutMask.png";
import year2000 from "./images/year_2000 1.png";
import kakashiVsZabuza from "./images/kakashiVsZabuza.png";
import sasukeVsHaku from "./images/sasukeVsHaku.png";

const HomePage = () => {
  // const [animateTeam7Big, setAnimateTeam7Big] = useState(false);
  // const [currentStep, setCurrentStep] = useState(null);

  // const onStepEnter = ({ data }) => {
  //   if (data === "team7Big") {
  //     setAnimateTeam7Big(true);
  //   }
  // };

  useEffect(() => {
    const mangaElements = document.querySelectorAll(".manga");
    mangaElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("animate");
      }, index * 300);
    });
  }, []);

  useEffect(() => {
    const narutoFirstPic = document.getElementById("naruto__first--pic");
    narutoFirstPic.classList.add("animate");
  }, []);

  return (
    <div className="Home">
      <div className="line"></div>
      <div className="home--logo">
        <img src={homeLogo} alt="" />
      </div>
      <div className="home--content">
        <div id="home__first" className="home--odd">
          <div id="naruto__first--pic">
            <img src={narutoFirst} alt="" />
          </div>
          <div className="home--first__about">
            <div className="home--first__h1">
              <h1>NARUTO STORY</h1>
            </div>
            <div className="home--first__descr">
              <div className="home--first__descr--img">
                <img src={znakLista} alt="" />
              </div>
              <p>
                From its debut in 1999, all the way to its stunning conclusion—
                <br />
                look back on the trials and tribulations of an outcast <br />
                ninja’s coming of age and the famous scenes that <br /> shaped
                his story!!
              </p>
            </div>
          </div>
          {/* ГОД ВЫХОДА ПЕРВОЙ ГЛАВЫ - 1999 */}
          <div id="first--arc__year" className="manga">
            <img src={firstArcYear} alt="" />
          </div>
          {/* ПЕРВЫЙ НОМЕР ГЛАВЫ С ОПИСАНИЕМ - 01 */}
          <div id="first--arc__title" className="manga">
            <img src={firstArcTitle} alt="" />
          </div>
          {/* ЛЕВАЯ ЧАСТЬ ПЕРВОЙ МАНГИ */}
          <div id="mangaFirstLeft" className="manga">
            <img src={mangaFirstLeft} alt="" />
          </div>
          {/* ЦЕНТРАЛЬНАЯ ЧАСТЬ ПЕРВОЙ МАНГИ */}
          <div id="mangaFirstCenter" className="manga">
            <img src={mangaFirstTopCenter} alt="" />
          </div>
          {/* ПРАВАЯ ЧАСТЬ ПЕРВОЙ МАНГИ */}
          <div id="mangaFirstRight" className="manga">
            <img src={mangaFirstRight} alt="" />
          </div>
          {/* ФОТО САСКЕ ИЗ ПЕРВОЙ МАНГИ */}
          <div id="mangaFirstSasukePic" className="manga">
            <img src={mangaFirstSasukePic} alt="" />
          </div>
          {/* НАДПИСЬ ПОД САСКЕ */}
          <div id="mangaFirstTextUnderSasuke" className="manga">
            <img src={mangaFirstTextUnderSasuke} alt="" />
          </div>
          {/* ФРЕЙМЫ ИЗ МАНГИ ВОЗЛЕ САСКЕ */}
          <div id="mangaFirstKissNearSasuke" className="manga">
            <img src={mangaFirstKissNearSasuke} alt="" />
          </div>
          {/* ФОТО САКУРЫ ИЗ ПЕРВЫЙ МАНГИ */}
          <div id="mangaFirstSakuraPic" className="manga">
            <img src={mangaFirstSakuraPic} alt="" />
          </div>
          {/* НАДПИСЬ ПОД САКУРОЙ */}
          <div id="mangaFirstTextUnderSakura" className="manga">
            <img src={mangaFirstTextUnderSakura} alt="" />
          </div>
          {/* ФРЕЙМЫ ИЗ МАНГИ ВОЗЛЕ САКУРЫ */}
          <div id="mangaFirstKakashiNearSakura" className="manga">
            <img src={mangaFirstKakashiNearSakura} alt="" />
          </div>
          {/* СЕРИЯ С БУБЕНЧИКАМИ И КОАНДА 7 */}
          <div id="mangaFirstBubenchiki" className="manga">
            <img src={mangaFirstBubenchiki} alt="" />
          </div>
          {/* НАДПИСЬ ПОД БУБЕНЧИКАМИ */}
          <div id="mangaFirstTextPodBubenchikami" className="manga">
            <img src={mangaFirstTextPodBubenchikami} alt="" />
          </div>
        </div>
        <div id="home__second" className="home--even">
          <div id="hakuPic" className="manga">
            <img src={hakuPic} alt="" />
          </div>
          <div id="mangaTitle2" className="manga">
            <img src={mangaTitle2} alt="" />
          </div>
          <div id="ZabuzaUnderHaku" className="manga">
            <img src={ZabuzaUnderHaku} alt="" />
          </div>
          <div id="textUnderZabuza" className="manga">
            <img src={textUnderZabuza} alt="" />
          </div>
          <div id="GrandpaWithSake" className="manga">
            <img src={GrandpaWithSake} alt="" />
          </div>
          <div id="hakuWithoutMask" className="manga">
            <img src={hakuWithoutMask} alt="" />
          </div>
          <div id="year2000" className="manga">
            <img src={year2000} alt="" />
          </div>
          <div id="kakashiVsZabuza" className="manga">
            <img src={kakashiVsZabuza} alt="" />
          </div>
          <div id="sasukeVsHaku" className="manga">
            <img src={sasukeVsHaku} alt="" />
          </div>
        </div>
        <div id="team7Big" className="home__photo--container">
          <img src={team7Big} alt="" />
        </div>
        <div id="home__third" className="home--odd"></div>
        <div id="home__fourth" className="home--even"></div>
        <div id="home__fifth" className="home--odd"></div>
        <div id="home__sixth" className="home--even"></div>
      </div>
    </div>
  );
};

export default HomePage;
