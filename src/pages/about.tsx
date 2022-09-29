/* eslint-disable prettier/prettier */
import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Acerca de" description="Acerca de" />}>
    <Content>
      <p>
        Esta página es una compilación de todas las aventuras que tuve a lo
        largo de mi vida. Espero les sea de utilidad toda la información que ire
        subiendo periodicamente en formato de blog. Si yo hubiese sabido todo
        esto cuando empecé me habría ayudado mucho.
      </p>
      <p>
        Trataré de que hayan publicaciones al menos 1 vez por semana, y ya
        veremos mas adelante si es posible ir subiendo mas blogs por semana.
      </p>
    </Content>
  </Main>
);

export default About;
