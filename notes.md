# Developing the front-end

1. Outline the components you'll need, and how you'll display them.
2. Need to make note of classname conventions

```js
function App() {
  return (
    <div className="App">
      <TitleBar />
      <NavigationBar /> 
      
      <Calendar />
      <Filter />
      <Cities />

      <FooterBar />
      <LegalBar />
    </div>
  );
}
```







