# MyEditor App

## Introduction

Welcome to **MyEditor**, a powerful and customizable text editor built with Lexical. This application offers an enhanced text editing experience with the following features:

1. **Rich Text Lexical Editor**: Provides a comprehensive set of rich text editing tools, making content creation easy and intuitive.
2. **Pokémon Integration**: Fetches the first 151 Pokémon from an external service and allows you to insert them directly into the editor.
3. **Inline Pokémon Renderer**: Uses a Lexical `DecoratorNode` to call a React component that renders Pokémon inline within the editor.
4. **Pokémon Insertion Plugin**: Includes a Lexical plugin that allows users to insert a Pokémon node by starting to type a Pokémon’s name.

## Features

### Rich Text Lexical Editor
Our editor supports various rich text features such as headings, lists, quotes, code blocks, tables, links, and more. It uses the Lexical framework to provide a highly customizable and performant editing experience.

### Pokémon Integration
The app fetches the first 151 Pokémon from a Pokémon service and provides a user-friendly interface to browse and insert Pokémon into your text.

### Inline Pokémon Renderer
A custom `DecoratorNode` is used to render Pokémon inline within the editor. This node calls a React component to display the Pokémon's details in a visually appealing way.

### Pokémon Insertion Plugin
This plugin enhances the editor by allowing users to type a Pokémon’s name and insert the corresponding Pokémon node. The plugin makes it easy to integrate Pokémon into your text with minimal effort.

## How to Run the React App

To run the MyEditor app locally, follow these steps:

2. **Install Dependencies**:
    Make sure you have Node.js and npm installed. Then, run:
    ```bash
    npm install
    ```

3. **Start the Development Server**:
    To start the app in development mode, run:
    ```bash
    npm run dev
    ```

4. **Build the App**:
    To create a production build of the app, run:
    ```bash
    npm run build
    ```

5. **Run Tests**:
    To run the test suite, use:
    ```bash
    npm test
    ```

## File Structure

```
myeditor/
├── src/
│   ├── components/
│   │   ├── LexicalEditor.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── PokeMon.tsx
│   ├── plugins/
│   │   ├── ToolbarPlugin.tsx
│   │   ├── TreeViewPlugin.tsx
│   │   ├── ListMaxIndentLevelPlugin.tsx
│   │   ├── CodeHighlightPlugin.tsx
│   │   ├── AutoLinkPlugin.tsx
│   └── themes/
│       ├── ExampleTheme.ts
│   └── services/
│       ├── pokemonService.ts
│   └── interfaces/
│       ├── PokemonInterface.ts
│   └── nodes/
│       ├── PokemonNode.tsx
│   └── App.tsx
│   └── index.tsx
├── public/
│   ├── index.html
├── package.json
└── README.md
```

---

Thank you for using **MyEditor**! We hope it enhances your text editing experience with its rich features and Pokémon integration.
# Discussion

## Trade-offs

In designing **MyEditor**, several trade-offs were made to balance functionality, performance, and ease of use. Implementing rich text editing features alongside Pokémon integration added complexity to the app. While Lexical provides a robust foundation for a feature-rich editor, ensuring smooth performance with additional custom nodes and plugins required careful optimization. Choosing Lexical for its flexibility and performance capabilities meant that we could offer a rich user experience without compromising on speed, though it did introduce a steeper learning curve for customizations.

Another significant trade-off was simplicity versus flexibility. The decision to fetch and display the first 151 Pokémon simplifies the initial implementation but limits the extensibility of the Pokémon feature. A more dynamic solution, such as fetching all available Pokémon or allowing user-defined selections, would increase flexibility but also add complexity to the app's logic and UI. This choice was made to deliver a functional product quickly, but it leaves room for future enhancements.

## Known Issues

One of the known issues with **MyEditor** is inconsistent rendering of custom Pokémon nodes across different browsers and devices. While Lexical's architecture helps manage these issues, testing on a broader range of environments is necessary to ensure uniform behavior. This inconsistency can affect user experience, especially for those using less common browsers or devices.

Another issue is potential plugin interference. Integrating multiple plugins, especially third-party ones, can sometimes lead to conflicts or unexpected behaviors. Ensuring seamless interaction between the Pokémon insertion plugin and other text editing features required meticulous attention to detail and thorough testing. These conflicts can sometimes result in bugs or degraded performance, highlighting the need for rigorous testing and debugging.


## Future Improvements

Given more time, several key enhancements could be made to **MyEditor**. One significant improvement would be enhanced Pokémon integration. A key enhancement would be to dynamically fetch all available Pokémon, potentially with pagination and search functionality. This would provide users with a more comprehensive and flexible tool for integrating Pokémon into their content. Additionally, improving the user interface is crucial. The current UI could be enhanced with more intuitive controls and better accessibility features. This includes optimizing the toolbar, improving the Pokémon selection interface, and ensuring all elements are fully accessible.

Advanced node customization is another area for future improvement. Expanding the capabilities of custom nodes beyond Pokémon could provide users with even richer content creation options. For instance, integrating other media types or interactive components could further enhance the editor's functionality. This would make **MyEditor** more versatile and appealing to a broader range of users.

Finally, more extensive testing and performance optimization would help identify and resolve issues more efficiently. Optimizing the app for lower-end devices and ensuring consistent performance across all environments would be crucial for a production-ready solution. Automated tests and performance profiling would help maintain high quality and reliability as the application evolves.

## Conclusion

**MyEditor** leverages the power of the Lexical framework to offer a rich text editing experience with unique features like Pokémon integration. While the current implementation provides a robust foundation, there are opportunities for further enhancement and optimization. By addressing known issues and expanding functionalities, **MyEditor** can evolve into an even more powerful and user-friendly tool. With a focus on improved integration, advanced customization, and rigorous testing, **MyEditor** has the potential to become a leading rich text editor.