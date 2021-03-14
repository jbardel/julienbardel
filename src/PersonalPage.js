import './PersonalPage.scss';

import * as $ from 'jquery'
import Presentation from './Presentation';
import Links from './Links';

function PersonalPage() {
  return (
    <div>
      <section id="presentation">
        <Presentation next="#links" />
      </section>
      <section id="links">
        <Links />
      </section>

    </div>
  );
}

$(function () {
  $('a[href*=\\#]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
  });
});

export default PersonalPage;
