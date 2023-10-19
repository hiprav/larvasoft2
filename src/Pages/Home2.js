import React from "react";
import Slider from "../component/Slider";

export default function Home2() {
console.log("aaya")
  const scrollElements = document.querySelectorAll(".js-scroll");
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return ( 
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };
  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };
  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };
  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el)
      }
    })
  }
  window.addEventListener("scroll", () => { 
    handleScrollAnimation();
  });
  
  return (
    <div>
      <header>
        <nav className="n1">
          <img className="larva-img1" src={"./images/larva.png"} alt="" />
          <ul className="n1-ul">
            <li>
              <button className="btn"><b>CONTACT AS</b></button>
            </li>
            <li>
              <button className="btn"><b>PRIVACY POLICY</b></button>
            </li>
            <li>
              <button className="btn"><b>TERM & CONDITIONS</b></button>
            </li>
            <li>
              <button className="btn"><b>LOGIN</b></button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="sec1">
          <div className="sec1_d1">
            <h2>
             <b>Welcome to Larvasoft Tech LLP - Your Partner in digital innovation</b>
            </h2>
            <button>Know More</button>
          </div>
          <div className="sec1_d2">
            <Slider />
          </div>
        </section> 
        <section className="sec2">
          <div className="sec2_d1">
            <h5>
              <b>
                Larvasoft your "Tech acquaintance" We at provide You the best of
                both the world simplicity you desire and innovation you aspire
                from all your software need to the best in class hardware.
              </b>
            </h5>
          </div>
          <div className="sec2_d2">
            <div>
              <img src={"./Icons/Support.png"} alt="" />
              <h4>
                <b>Costom Pc & Hardware</b>
              </h4>
              <p>
                Whether you'er hardcore gamer, a creative professional,or simply
                someone who crave top-tire performance, we'er here to turn your
                vision into reality.
              </p>
            </div>

            <div>
              <img src={"./Icons/Source code.png"} alt="" />
              <h4>
                <b>Custom Website Development</b>
              </h4>
              <p>
                Our web development service encompass a wide range of
                technologies and platform to create stunning, responsive, and
                user-friendly website
              </p>
            </div>

            <div>
              <img src={"./Icons/Uber Mobile App.png"} alt="" />
              <h4>
                <b>IOS/Andriod Development</b>
              </h4>
              <p>
                In today's mobile-centric world, having a powerfull app can set
                you apart from the compition. weather you need an IOS, Andriod
                app, we have the experies to bring your vision to life.
              </p>
            </div>
          </div>
        </section>
        <hr />
        <section className="sec3">
          <div>
            <img src={"./Icons/computer_work.png"} alt="" />
          </div>
          <div className="sec3_d1">
            <h2><b>Web Development Services:</b></h2>
            <ul>
              <li>E-commerce Solution</li>
              <li>Content Management Systems</li>
              <li>Web Application Development</li>
              <li>Responsive Design</li>
              <li>User Exprience (Ux) Optimization</li>
            </ul>
          </div>
        </section>
        <section className="sec4">
          <div className="sec4_d1">
            <h3>Unlock  the Power of the Web with Larasoft</h3>
          </div>
          <div className="sec4_d2">
            <p>
              At Larvasoft, we don't just create website - we craft digital
              experiences that leave a lasting impression.
            </p>{" "}
            <p>
              Our web development service are designed to elevate your online
              presence, engage your audience, and drive tangible results for
              your business.
            </p>
          </div>
        </section>
        <section className="sec5">
          <div className="sec5_d1">
            <h3><b>App Development Service:</b></h3>
            <ul>
              <li>IOS App Development</li>
              <li>Andriod App Development</li>
              <li>Cross-Platform App Development</li>
              <li>Mobile UI/UX Design</li>
              <li>App Testing and Quality Assurance</li>
            </ul>
          </div>
          <div className="sec5_d2">
            <img src={"./Icons/woman.png"} alt="" />
          </div>
        </section>
        <section className="sec6">
          <div className="example">
            <img className="background-image" src={"./Icons/unsplash.png"} alt="" />
            <div className="overlay-text">
              <h2><b>Empowering Your Business Through Innovation App Solution</b></h2>
            </div>
          </div>
        </section>
        <section className="sec7">
          <h3><b>
            We Sepcialize in crafting Cutting-edge web app and app
            solutions <p>that drive your business forward.</p></b>
          </h3>
        </section>
        <section className="sec8">
          <div className="bg-black">
            <p>
              we belive that apps have the power to rehape industries, tranform
              user experience,and bring your ideas in the digital realm.
            </p>
            <p>
              As a leading app development agency,we'er dedicated to crafting
              functional, user-centric, and captivating apps that connect you
              with your audience and drive your business forward.
            </p>
          </div>
          <div>
            <img className="w-5" src={"./Icons/phone_google.png"} alt="" />
          </div>
        </section>
        <section className="sec9">
          <div>
            <img
              className="w-25"
              src={"./Icons/computer screen off.png"}
              alt=""
            />
          </div>
          <div>
            <h2><b>Custom PC Hardware</b></h2>
            <ul>
              <li>Custom Gaming Rigs</li>
              <li>Professional Workstation</li>
              <li>Aesthetic Masterpieces</li>
              <li>Performance Upgrades</li>
              <li>Personalized Service</li>
            </ul>
          </div>
        </section>
        <section className="sec10">
          <div className="sec10_d1">
            <h3>Crafting Your Perfect Computing Experience</h3>
          </div>
          <div className="sec10_d2">
            <img className=" sec10_img" src={"./Icons/chip.png"} alt="" />
          </div>
          <div className="sec10_d3">
            <p><b>
              we're not just about PCs - we're about building personalized
              computing solution that empoower you to explore, create, and
              conqure your digital ambition. With our expert knowledge,
              meticulous carftmanship, and commitment to quality, we tranform
              components into masterpieces tailoring each PC to your unique
              needs and perferences
            </b></p>
          </div>
        </section>
        <br /><br /><br /><br /><hr />
        <section className="sec11">
          <h2><b>Why choose Larvasoft?</b></h2><br /><br /> <br />
           
  <section className="scroll-container">
     <div className="scroll-element js-scroll slide-left"> 
       <div className="card-body">
        <h2 className="card-title">Innovation <img src={"./Icons/Light Automation.png"} alt="" /></h2></div> 
         <p className="card-text">We stay up-to-date with the latest trends and technology to ensure your digital solutions are ahead of the curve.</p>
     </div>
  </section>

  <section className="scroll-container">
    <div className="scroll-element js-scroll slide-right"><div className="card-body">
      <h2 className="card-title">Collaboration<img src={"./Icons/People.png"} alt="" /></h2></div>
         <p className="card-text">your ideas and vision are essitial to us .WE belive in transparent communation  and Collaboration thoughout the development process.</p>
     </div>
  </section>

  <section className="scroll-container">
    <div className="scroll-element js-scroll slide-left"><div className="card-body">
      <h2 className="card-title"><img src={"./Icons/Business Group.png"} alt="" />Experienced Team</h2></div>
         <p className="card-text">Our team comprises skilled developers, disgners, and strategists with years of industrial experience.</p>
     </div>
  </section> 
       
  </section>
        <section className="sec12">
          <h2 className="h2">Crafting Exeptional user Expirances</h2>
          <div className="sec12_d1">
            <div>
              <h3>
                <img src={"./Icons/Ok.png"} alt="" />
                Custom Solutions
              </h3><br />
              <p> 
                We understand that every busines is unque. That's why we tailor
                our solutions to meet your specifc needs.
              </p>
            </div>
            <div>
              <h3>
                <img src={"./Icons/Ok.png"} alt="" />
                User-Centirc Approach
              </h3><br />
              <p>
                Our designs and developments are focused on providing
                outstanding user experiences that resonate with your audience.
              </p>
            </div>
            <div>
              <h3>
                <img src={"./Icons/Ok.png"} alt="" />
                Timely Delivery
              </h3><br />
              <p>
                We value your time. Our team works diligently to meet project
                milestones and deadlines without compromising quality.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="ft">
        <div className="ft1-div1">
          <div className="foothead">
            <h2 className="h"><b>Click on QR or Scan to Contact Us</b></h2>
          </div>
          <img className="foothead-QR" src={"./images/download.png"} alt="" />
        </div>

        <div className="ft1-div2"><br />
        <img src={"./images/larva.png"} alt="" /> <br />
          <div className="ft1-div3">
            <a href="/">OUR PRODUCT</a>
            <a href="/">SERVICES</a>
            <a href="/">CONTACT US</a> 
            <a href="/">LOGIN</a>
          </div><br /><br />
          </div>
        
          <div className="ft1-d4">
            <h4>Get in Touch</h4>
            <div className="logo">
              <img className="sos" src={"./images/f.png"} alt="" />
              <img className="sos" src={"./images/i.png"} alt="" />
              <img className="sos" src={"./images/t.png"} alt="" />
              <img className="sos" src={"./images/p.png"} alt="" />
            </div>
          </div>
         
        <div className="ft1-d5"> 
          <h4 className="last"><b>Address</b></h4>
          <p className="last1">
            Opp .Criticar Hospital, Bhandup West,Mumbai-78</p>
        </div>
      </footer> 
    </div>
  );
}
