import{checkForURL}from'../src/client/js/urlChecker'

test('checking input text is a url',()=>{
    expect(checkForURL("https://en.wikipedia.org/wiki/Vega")).toBe(true);
    expect(checkForURL("//Vega")).toBe(false);
})