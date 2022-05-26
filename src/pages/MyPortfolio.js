import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MyPortfolio = () => {
  return (
    <div className="border-solid border-2 text-center p-4 lg:py-20 lg:my-10 lg:mx-80 shadow">
      <h3 className="text-2xl uppercase">
        Name: <span className="">Prohollad Banik (Prohor)</span>
      </h3>
      <h4 className="text-lg text-blue-600 font-semibold">
        <FontAwesomeIcon icon={faEnvelope} />{" "}
        <span className="">prohor.b722@gmail.com</span>
      </h4>

      <div className="my-10 text-md font-semibold">
        <p>List of Technologies</p>

        <div className="mt-2">
          <p>Font end:</p>
          <div class="badge badge-secondary m-1">HTML</div>
          <div class="badge badge-secondary m-1">HTML5</div>
          <div class="badge badge-secondary m-1">CSS</div>
          <div class="badge badge-secondary m-1">Tailwind</div>
          <div class="badge badge-secondary m-1">Bootstrap</div>
        </div>
        <div className="">
          <div class="badge badge-secondary m-1">Daisy UI</div>
          <div class="badge badge-secondary m-1">React JS</div>
          <div class="badge badge-secondary m-1">Recharts</div>
        </div>

        <p className="mt-4">Back end:</p>
        <div>
          <div class="badge badge-success m-1">PHP</div>
          <div class="badge badge-success m-1">JAVASCRIPT</div>
          <div class="badge badge-success m-1">ES6</div>
          <div class="badge badge-success m-1">Express JS</div>
          <div class="badge badge-success m-1">Node JS</div>
        </div>

        <div>
          <div class="badge badge-success m-1">Laravel</div>
          <div class="badge badge-success m-1">Rest API</div>
          <div class="badge badge-success m-1">firebase</div>
          <div class="badge badge-success m-1">Axios</div>
          <div class="badge badge-success m-1">MySQL</div>
        </div>

        <div>
          <div class="badge badge-success m-1">mongoDB</div>
          <div class="badge badge-success m-1">JQuery</div>
          <div class="badge badge-success m-1">Ajax</div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-semibold mb-2">Educational Background</h3>

        <p><span className="font-semibold">BSC:</span> Kurigram Govt College, Kurigram <span className="ml-4 text-gray-500 font-semibold">CGPA: 3.47</span></p>
        <p className="uppercase mb-2">Year: 2022</p>
        
        <p><span className="font-semibold">HSC:</span> Kurigram Govt College, Kurigram <span className="ml-4 text-gray-500 font-semibold">GPA: 4.08</span></p>
        <p className="uppercase mb-2">Year: 2015</p>
        
        <p><span className="font-semibold">SSC:</span> Kurigram Govt High School, Kurigram <span className="ml-4 text-gray-500 font-semibold">GPA: 4.56</span></p>
        <p className="uppercase mb-2">Year: 2013</p>

        <div>
            <h3 className="text-lg text-secondary text-xl font-semibold mt-10" >Live Sites</h3>
            <a href="https://watch-house-efd0d.web.app/" target="_blank" rel="noreferrer" className="font-bold text-blue-500">WatchHouse</a>
            <br/>
            <a href="https://wedding-photographer-8d8a6.web.app/login" target="_blank" rel="noreferrer" className="font-bold text-blue-500">Wedding Photographer</a>
            <br/>
            <a href="https://shoeshell.netlify.app/" target="_blank" rel="noreferrer" className="font-bold text-blue-500">ShoeShell</a>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
