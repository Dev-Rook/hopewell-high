Subjects:
Mathematics - CSEC,  City & Guilds
English A- CSEC,  City & Guilds
English B
Spanish 
Social Studies 
History 
Biology
Integrated Science 
Chemistry 
Physics
Physical Education 
Agricultural Science 
Principles of Business 
Principles of Accounts
EDPM
Literacy Education (internal)
Guidance &Counseling 
Home and Family Life Education (HFLE)
Technical Drawing

SKILLS:
Home Economics 
Clothing & Textile
Cosmetology 
Food and Beverages 
Home Management & Family 
Auto mechanic /
Electrical /
Building Technology /
Metal Technology /
Call Centre
Computer Repairs /
Visual Arts
Music





        <ul className={Styles.Navlink_Container}>
          <Accordion className={Styles.Accordion} flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>Dog water</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>Bregoli</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </ul>








        <ul className={Styles.Navlink_Container}>
          <li className={Styles.NavItem}>
            <Link onClick={doubleFunction} className={Styles.Navlink} to={"/"}>
              <HomeIcon sx={{ color: "White", fontSize: 25 }} />
              Home
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link
              onClick={doubleFunction}
              className={Styles.Navlink}
              to={"AboutPage"}
            >
              {/* <InfoIcon sx={{ color: "White", fontSize: 25 }} /> */}
              About
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link
              onClick={doubleFunction}
              className={Styles.Navlink}
              to={"Curriculums"}
            >
              {/* <ListAltIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Curriculums
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link
              onClick={doubleFunction}
              className={Styles.Navlink}
              to={"Documents"}
            >
              {/* <DocumentScannerIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Documents
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link
              onClick={doubleFunction}
              className={Styles.Navlink}
              to={"News"}
            >
              {/* <NewspaperIcon sx={{ color: "White", fontSize: 25 }} /> */}
              News
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link onClick={doubleFunction} className={Styles.Navlink} to={""}>
              {/* <CreditScoreIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Grades
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link
              onClick={doubleFunction}
              className={Styles.Navlink}
              to={"Contact"}
            >
              {/* <CallIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Contact
            </Link>
          </li>
        </ul>