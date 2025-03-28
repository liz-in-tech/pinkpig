import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/language/":[{
    text: "Language",
    icon: "book",
    collapsible: true,      
    children: "structure"
  }],
  "/llm/":[{
    text: "Llm",
    icon: "book",
    collapsible: true,      
    children: "structure"
  }],
  "/python/":[{
    text: "Python",
    icon: "book",
    collapsible: true,      
    children: "structure"
  }],
  "/java/":[{
    text: "Java",
    icon: "book",
    collapsible: true,      
    children: "structure"
  }],
  "/frontend/":[{
    text: "Frontend",
    icon: "book",
    collapsible: true,      
    children: "structure"
  }],
  "/middleware/":[{
    text: "Middleware",
    icon: "book",
    collapsible: true,      
    children: "structure"
  }],
  "/cs/":[{
    text: "CS",
    icon: "book",
    collapsible: true,      
    children: "structure"
  }],
  "/operations/":[{
    text: "Operations",
    icon: "book",
    collapsible: true,      
    children: "structure"
  }],
  "/tools/":[{
    text: "Tools",
    icon: "book",
    collapsible: true,      
    children: "structure"
  }],
  "/": [
    {
      text: "Blog",
      icon: "book",
      collapsible: true,      
      children: "structure"
    }]
});