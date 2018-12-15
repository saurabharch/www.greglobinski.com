import React from "react";
import ToolBoxList from "../components/ToolBoxList";
import ToolBoxPopOver from "../components/ToolBoxPopOver";
import FaUser from "react-icons/lib/fa/user";

class ToolBoxListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.itemListOnClickHandler = this.itemListOnClickHandler.bind(this);
    this.popOverOnClickHandler = this.popOverOnClickHandler.bind(this);
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.windowClickHandler = this.windowClickHandler.bind(this);
    this.windowKeyDownHandler = this.windowKeyDownHandler.bind(this);
    this.deactivatePopOver = this.deactivatePopOver.bind(this);

    this.state = {
      items: [
        {
          id: 1,
          label: "JavaScript",
          description: `Often abbreviated as <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JS</a>, 
            it is a high-level, dynamic, weakly typed,
            prototype-based, multi-paradigm, and interpreted programming language.`,
          comment: `That's the only programing language I use on a daily basis. 
            <b>And I love it!</b>`
        },
        {
          id: 38,
          label: "TypeScript",
          description: `<a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> is an open-source programming language developed and maintained by Microsoft. 
            It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.`,
          comment: `That's the only programing language I also use on a daily basis. 
            <b>And I love it!</b>`
        },
        {
          id: 2,
          label: "ES2015",
          description: `It's a pseudonym for the latest version of the 
            <a href="https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015" target="_blank">
            ECMAScript</a> aka JavaScript.`,
          comment: `ES6 makes my coding easier.`
        },
        {
          id: 3,
          label: "Babel",
          description: `A <a href="https://babeljs.io/" target="_blank">transpiler</a> for JavaScript 
            best known for its ability to turn ES2015 into code that runs in browsers 
            which does not support it directly. It lets us use next generation 
            JavaScript, today.`,
          comment: `That's a <b>must-have</b> tool.`
        },
        {
          id: 4,
          label: "HTML5",
          description: `A markup language used for structuring and presenting content on the 
            World Wide Web. It is the fifth and current major version of the 
            <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">HTML</a> standard.`,
          comment: `There is no web without HTML.`
        },
        {
          id: 5,
          label: "CSS / CSS3",
          description: `Cascading Style Sheets - a style sheet 
            <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">language</a> 
            used for describing the presentation of a document written in HTML.`,
          comment: `CSS makes the web beautiful.`
        },
        {
          id: 6,
          label: "SCSS/SASS",
          description: `A scripting <a href="http://sass-lang.com/" target="_blank">language</a> 
          that is interpreted or compiled into Cascading Style Sheets (CSS).`,
          comment: `SASS helps me write and manage CSS code faster.`
        },
        {
          id: 7,
          label: "BEM",
          description: `BEM (Block, Element, Modifier) is a component-based 
            <a href="https://en.bem.info/" target="_blank">approach</a> to web development.`
        },
        {
          id: 8,
          label: "Git",
          description: `Git is a <a href="https://en.wikipedia.org/wiki/Git" target="_blank">version control</a> system for tracking changes 
            in computer files and coordinating work on those files among multiple people.`,
          comment: `It saved my life, a couple of times ;)`
        },
        {
          id: 9,
          label: "Github",
          description: `A web-based Git version control repository hosting service.`,
          comment: `That's my <a href="https://github.com/saurabharch" target="_blank">Github</a>`
        },
        {
          id: 10,
          label: "React",
          description: `A JavaScript <a href="https://reactjs.org/" target="_blank">library</a> for building user interfaces. 
            React makes it painless to create interactive UIs. Build encapsulated components 
            that manage their own state and then compose them to make complex UIs.`,
          comment: `I've been in love since using it for the first time.`
        },
        {
          id: 11,
          label: "Gatsby",
          description: `A static PWA (Progressive Web App) 
            <a href="https://www.gatsbyjs.org/" target="_blank">generator</a>. Gatsby lets 
            you build blazing-fast sites with your data, whatever the source.`,
          comment: `The website you are looking at now is built with Gatsby.`
        },
        {
          id: 12,
          label: "GraphQL",
          description: `It's a query language for APIs. <a href="http://graphql.org/" target="_blank">GraphQL</a> 
          gives clients the power to ask for exactly what they need and nothing more.`,
          comment: `The <a href="https://www.graph.cool/" target="_blank">Graphcool</a> framework and its
          <b>Cloud</b> service manages the GraphQL backend for my <a href="https://github.com/greglobinski/lazywill-demo" target="_blank">app.</a>`
        },
        {
          id: 13,
          label: "Angular 2+",
          description: `A TypeScript-based open-source front-end web application 
            <a href="https://angular.io/" target="_blank">platform</a>.`
        },
        {
          id: 14,
          label: "ArangoDB / AQL",
          description: `A multi-model mostly-memory <a href="https://www.arangodb.com/" target="_blank">database</a>
            with a flexible data model for documents and graphs. It is designed as 
            a “general purpose database”, offering all the features you typically need for modern web applications.`
        },
        {
          id: 15,
          label: "npm",
          description: `A package <a href="https://www.npmjs.com/" target="_blank">manager</a> for 
            the JavaScript programming language.`
        },
        {
          id: 16,
          label: "Webpack",
          description: `An open-source JavaScript module <a href="https://webpack.js.org/" target="_blank">bundler</a>.
            Webpack takes modules with dependencies and generates static assets representing those modules.`
        },
        {
          id: 17,
          label: "jQuery",
          description: `A cross-platform JavaScript <a href="https://jquery.com/" target="_blank">library</a> designed to simplify 
            the client-side scripting of HTML.`,
          comment: `I used it much and often ... in the past.`
        },
        {
          id: 18,
          label: "Wordpress",
          description: `The largest self-hosted <a href="https://wordpress.org/" target="_blank">blogging tool</a>
            in the world, used on millions of sites.`,
          comment: `I've built some websites using it. Like  
            <a href="http://polishlanguage.dlachetnych.pl/" target="_blank">this</a> one or 
            <a href="http://lab.gregloby.com/" target="_blank">that</a> one.`
        },
        {
          id: 19,
          label: "Nodejs",
          description: `Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.`,
          comment: `About Node.js® As an asynchronous event driven JavaScript runtime, Node  <a href="http://nodejs.org/" target="_blank">site</a> is designed to build scalable network applications nodejs.`
        },
        {
          id: 20,
          label: ".Net",
          description: `Free. Cross-platform. Open source.`,
          comment: `.NET (pronounced dot net) is a framework that provides a programming guidelines that can be used to develop a wide range of applications. you find about more .net <a href="https://dotnet.microsoft.com/" target="_blank">site</a>.`
        },
        {
          id: 21,
          label: "MongoDB",
          description: `MongoDB: Open Source Document Database written in C++, C and JavaScript.`,
          comment: `Find More Feature and about the <a href="https://www.mongodb.com/" target="_blank">MongoDB</a> Site.`
        },
        {
          id: 22,
          label: "PSQL",
          description: `PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability. psql is written on top of the C programming language`,
          comment: `Official website and Documentation you can find here on <a href="https://www.postgresql.org/" target="_blank">PSQL</a> website.`
        },
        {
          id: 23,
          label: "Redis",
          description: `Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker`,
          comment: `Official website and Documentation you can find here on <a href="https://redis.io/" target="_blank">Redis</a> website.`
        },
        {
          id: 24,
          label: "Cassandra",
          description: `Apache Cassandra is a free and open-source, distributed, wide column store, NoSQL database management system designed to handle large amounts of data across many commodity servers, providing high availability with no single point of failure.`,
          comment: `Official website and Documentation you can find here on <a href="cassandra.apache.org/" target="_blank">Cassandra</a> website.`
        },
        {
          id: 25,
          label: "MSSQL",
          description: `Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications—which may run either on the same computer or on another computer across a network`,
          comment: `Official website and Documentation you can find here on <a href="https://www.microsoft.com/en-gb/sql-server/" target="_blank">MSSQL</a> website.`
        },
        {
          id: 26,
          label: "Kafka",
          description: `Apache Kafka is an open-source stream-processing software platform developed by the Apache Software Foundation, written in Scala and Java. The project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feeds.`,
          comment: `<a href="https://kafka.apache.org/" target="_blank">Kafka®</a> is used for building real-time data pipelines and streaming apps. It is horizontally scalable, fault-tolerant, wicked fast, and runs in production in thousands of companies.`
        },
        {
          id: 27,
          label: "RabbitMQ",
          description: `RabbitMQ is an open source message broker software that originally implemented the Advanced Message Queuing Protocol and has since been extended with a plug-in architecture to support Streaming Text Oriented Messaging Protocol, Message Queuing Telemetry Transport, and other protocols.`,
          comment: `With more than 35,000 production deployments of RabbitMQ world-wide at small startups and large enterprises,<a href="https://www.rabbitmq.com/" target="_blank">RabbitMQ</a> is the most popular open source message broker.`
        },
        {
          id: 28,
          label: "HiveMQ",
          description: `HiveMQ is the MQTT based messaging platform for fast, efficient and reliable data movement to and from connected IoT devices and enterprise systems.`,
          comment: ` <a href="https://www.hivemq.com/" target="_blank">HiveMQ</a> makes it easy to move data to and from connected devices in an efficient, fast and reliable manner. We make it possible to build connected products that enable new digital businesses.`
        },
        {
          id: 29,
          label: "MQTT",
          description: `MQTT is an ISO standard publish-subscribe-based messaging protocol. It works on top of the TCP/IP protocol. It is designed for connections with remote locations where a "small code footprint" is required or the network bandwidth is limited. The publish-subscribe messaging pattern requires a message broker`,
          comment: ` <a href="http://mqtt.org/" target="_blank">MQTT</a> is a machine-to-machine (M2M)/"Internet of Things" connectivity protocol. It was designed as an extremely lightweight publish/subscribe messaging transport. It is useful for connections with remote locations where a small code footprint is required and/or network bandwidth is at a premium. For example, it has been used in sensors communicating to a broker via satellite link, over occasional dial-up connections with healthcare providers, and in a range of home automation and small device scenarios.`
        },
        {
          id: 30,
          label: "AWS",
          description: `Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. Free to join, pay only for what you use.`,
          comment: `For more explore on <a href="https://aws.amazon.com/" target="_blank">AWS</a> website.`
        },
        {
          id: 31,
          label: "google cloud",
          description: `Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products`,
          comment: `Build, innovate, and scale with Google Cloud Platform. Collaborate and be more productive with G Suite. See what's possible with <a href="https://cloud.google.com/" target="_blank">Google Cloud</a> .`
        },
        {
          id: 32,
          label: "Azure",
          description: `Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through a global network of Microsoft-managed data centers.`,
          comment: ` <a href="https://azure.microsoft.com" target="_blank">Microsoft Azure</a> is an open, flexible, enterprise-grade cloud computing platform. Move faster, do more and save money with IaaS + PaaS.`
        },
        {
          id: 33,
          label: "Docker",
          description: `Docker is a computer program that performs operating-system-level virtualization, also known as 'containerization', which is written in Go programming language`,
          comment: `Learn more about the only enterprise-ready container platform that enables IT leaders to cost-effectively build and manage their application at <a href="https://www.docker.com/" target="_blank">Docker</a> website.`
        },
        {
          id: 34,
          label: "joyent",
          description: `Open source and Hybrid Cloud Infrastructure as a Service specialized in running Containers, Serverless Docker and VMs securely at scale.`,
          comment: `Official website and Documentation you can find here on <a href="https://www.joyent.com/" target="_blank">Joyent</a> website.`
        },
        {
          id: 35,
          label: "nginx",
          description: `Nginx is a web server which can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.`,
          comment: `NGINX accelerates content and application delivery, improves security, facilitates availability and scalability for the busiest web sites on the Internet. for more about <a href="https://www.nginx.com/" target="_blank">nginx</a> here.`
        },
        {
          id: 36,
          label: "Apache Spark",
          description: `Apache Spark is an open-source distributed general-purpose cluster-computing framework`,
          comment: `<a href="https://spark.apache.org/" target="_blank">Apache Spark</a> is a unified analytics engine for big data processing, with built-in modules for streaming, SQL, machine learning and graph processing.`
        },
        {
          id: 37,
          label: "Haraka",
          description: `Haraka is an open source SMTP server. Its architecture is plugin-oriented and event-driven. The server and its plugins are written in Javascript using the Node.js framework. Haraka follows a plugin model, implementing a very lightweight SMTP core and providing developers hooks into the mail flow.`,
          comment: `<a href="https://haraka.github.io/" target="_blank">Haraka</a> provides extremely high performance coupled with a flexible plugin system allowing Javascript programmers full access to change the behaviour of the server. It is used heavily in some high traffic sites`
        }
      ],
      activatedItem: null,
      popOver: {
        isActive: false,
        topPx: "auto",
        bottomPX: "auto",
        leftPx: "auto",
        rightPx: "auto",
        description: "",
        comment: ""
      },
      popOverPosition: null
    };
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.windowResizeHandler, false);
      window.addEventListener("click", this.windowClickHandler, false);
      window.addEventListener("keydown", this.windowKeyDownHandler, false);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.windowResizeHandler, false);
      window.removeEventListener("click", this.windowClickHandler, false);
      window.removeEventListener("keydown", this.windowKeyDownHandler, false);
    }
  }

  componentWillReceiveProps(nextProps) {
    //
  }

  windowKeyDownHandler(e) {
    if (this.state.activatedItem && e.which == 27) {
      this.deactivatePopOver();
    }
  }

  windowResizeHandler() {
    if (this.state.activatedItem) {
      this.deactivatePopOver();
    }
  }

  windowClickHandler(e) {
    const isValidClickTarget =
      e.target.nodeName === "A" || e.target.nodeName === "BUTTON"
        ? true
        : false;
    if (!isValidClickTarget && this.state.activatedItem) {
      this.deactivatePopOver();
    }
  }

  itemListOnClickHandler(e, id) {
    const anchor = {
      offsetTop: e.target.offsetTop,
      offsetLeft: e.target.offsetLeft,
      offsetWidth: e.target.offsetWidth,
      offsetHeight: e.target.offsetHeight
    };
    /*
      check why the initial shape of the code does'n work in iPhone 4
      it semas as array.find() function is not transpiled corectlyu
      const popOver = this.state.items.find(el => el.id === id);
    */
    const popOver = this.state.items.filter(el => el.id === id)[0];
    this.positionPopOver(anchor, popOver);

    this.setState(() => ({
      activatedItem: id
    }));
  }

  positionPopOver(anchor, popOver) {
    const popWidth = 200;
    const popHeight = 100;
    const body = document.querySelector("body");

    const spaceUnder =
      body.offsetHeight - anchor.offsetTop - anchor.offsetHeight;
    const spaceOnRight =
      body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth;

    const verticalPositionUnder = spaceUnder >= anchor.offsetTop ? true : false;
    const horizontalPositionOnRight =
      spaceOnRight >= anchor.offsetLeft ? true : false;

    const verticalPosition = verticalPositionUnder
      ? anchor.offsetTop
      : anchor.offsetTop - popHeight + anchor.offsetHeight;
    const horizontalPosition = horizontalPositionOnRight
      ? anchor.offsetLeft
      : anchor.offsetLeft - popWidth + anchor.offsetWidth;

    const topPx = verticalPositionUnder
      ? `${anchor.offsetTop + anchor.offsetHeight}px`
      : `auto`;
    const bottomPx = verticalPositionUnder
      ? `auto`
      : `${body.offsetHeight - anchor.offsetTop}px`;
    const leftPx = horizontalPositionOnRight
      ? `${anchor.offsetLeft}px`
      : `auto`;
    const rightPx = horizontalPositionOnRight
      ? `auto`
      : `${body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth}px`;
    const positionUnderModifierClass = "";

    this.setState(() => ({
      popOver: {
        isActive: true,
        topPx: topPx,
        bottomPx: bottomPx,
        leftPx: leftPx,
        rightPx: rightPx,
        modifierClasses: `${positionUnderModifierClass}`,
        description: popOver.description,
        comment: popOver.comment
      },
      popOverPosition: verticalPositionUnder ? "under" : "above"
    }));
  }

  popOverOnClickHandler() {
    this.deactivatePopOver();
  }

  deactivatePopOver() {
    this.setState(() => ({
      popOver: {
        isActive: false
      },
      activatedItem: null,
      popOverPosition: null
    }));
  }

  render() {
    return (
      <div>
        <ToolBoxList
          items={this.state.items}
          activatedItem={this.state.activatedItem}
          itemOnClick={this.itemListOnClickHandler}
          popOverPosition={this.state.popOverPosition}
        />
        {this.state.popOver.isActive && (
          <ToolBoxPopOver
            top={this.state.popOver.topPx}
            bottom={this.state.popOver.bottomPx}
            left={this.state.popOver.leftPx}
            right={this.state.popOver.rightPx}
            modifierClasses={this.state.popOver.modifierClasses}
            description={this.state.popOver.description}
            comment={this.state.popOver.comment}
            onClick={this.popOverOnClickHandler}
          />
        )}
      </div>
    );
  }
}

export default ToolBoxListContainer;
