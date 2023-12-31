import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        console.log(response.data);
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();


        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
          Добро пожаловать в MySubs – ваш личный помощник в управлении подписками!
          <br/>
          О сервисе:
          MySubs предназначен для тех, кто хочет легко и эффективно отслеживать и управлять своими подписками. С каждым днем количество подписок растет, и нам важно помочь вам сохранить контроль над вашими финансами и расписанием.
      {Array.from(content).map(content => <div>{content.firstName}  {content.lastName}</div>)}
      </header>
    </div>
  );
};

export default Home;
