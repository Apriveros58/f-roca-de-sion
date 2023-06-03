import React from 'react';
import '../components/Statics/styles/FBcomponent.css'

function FBcomponent() {
  return (
    <React.Fragment>
        <div className="FBsection">
          <div class="fb-page"
          data-href="https://www.facebook.com/fundacionrocadesionp"
          data-tabs="timeline,events"
          data-width="800"
          data-height="560"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="false"
          loading="lazy" >
              <blockquote cite="https://www.facebook.com/fundacionrocadesionp" class="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/fundacionrocadesionp">.</a>
              </blockquote>
          </div>
        </div>
    </React.Fragment>
  );
}

export default FBcomponent;