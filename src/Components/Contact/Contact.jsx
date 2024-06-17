import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import github_2 from "../../assets/github_2.svg";
import linkdin from "../../assets/linkdin.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "10b2a705-00aa-49ac-bdff-17afcf52d3e1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Email sent successfully! 🎉");}
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Feel free to reach out to me.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>vatsalsharma0217@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91-800-399-5381</p>
            </div>
            <div className="contact-detail">
              <img src={github_2} alt="" />
              <p>
                <a href="https://github.com/VatsalSharma77">VatsalSharma77</a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={linkdin} alt="" />
              <p>
                <a href="https://www.linkedin.com/in/vatsal-sharma-%E2%9A%A1%F0%9F%92%A1-261801240/">Vatsal Sharma ⚡💡</a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Kota, Rajasthan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button className="contact-submit" type="submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
