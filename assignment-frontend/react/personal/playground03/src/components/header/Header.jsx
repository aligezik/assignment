import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="cv-photo">
        <img 
          className="cv-photo1"
          src="https://media.licdn.com/dms/image/C4E03AQHA6ymJOsx8ug/profile-displayphoto-shrink_800_800/0/1637091555235?e=1681948800&v=beta&t=nAeAPxCDRKCvm5HPrgQMIttA7MC05ehBQQXaZboAGfs"
          alt=""
        />
      </div>
      <div className="cv-content">
        <p className="cv-title">Ahmet GÜRDAL</p>
        <p className="cv">cyber security specialist</p>
        <p className="cv1">Turkish Military Academy | System Engineering</p>
        <p className="cv2">Anadolu Universty | sport management</p>
        <p className="cv3">Istanbul Universty | sport sciences</p>
      </div>
    </div>
  );
};

export default Header;
