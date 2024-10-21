const parent1 = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I'm Parent H1 Tag"), React.createElement("h2", {}, "I'm Parent H2 Tag")],React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I'm Child H1 Tag"), React.createElement("h2", {}, "I'm Child H2 Tag")]))])


// const parent =
//     React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I'm an H1 Tag"), React.createElement("h2", {}, "I'm an H2 Tag")])
//     )




// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!");
console.log("parent", parent1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent1);