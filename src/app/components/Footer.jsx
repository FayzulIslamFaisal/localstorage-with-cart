const Footer = () => {
  const currentDate = new Date(); 
  const year = currentDate.getFullYear(); 
  const time = currentDate.toLocaleTimeString(); 

  return (
    <div
      style={{ textAlign: "center", padding: "10px", background: "#f8f8f8" }}
    >
      <p>© {year} Your Company Name. All rights reserved.</p>
      <p>Current Time: {time}</p>
    </div>
  );
};

export default Footer;
