# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Class Diagram

```mermaid
classDiagram
    direction TB

    class App {
        -boolean darkMode
        +render() JSX
    }

    class Header {
        +boolean darkMode
        +function onToggleDarkMode
        +render() JSX
    }

    class About {
        +render() JSX
    }

    class Skills {
        +Array~Skill~ skills
        +render() JSX
    }

    class Hobbies {
        -string filter
        +Array~Hobby~ hobbies
        +filterHobbies() Array~Hobby~
        +render() JSX
    }

    class Favorites {
        +Object favorites
        +render() JSX
    }

    class Socials {
        +Array~Social~ socials
        +render() JSX
    }

    class Contact {
        -Object form
        -Object errors
        -boolean submitted
        +validate() Object
        +handleSubmit() void
        +render() JSX
    }

    class Footer {
        +render() JSX
    }

    class Skill {
        +string name
        +number level
    }

    class Hobby {
        +string emoji
        +string name
        +string desc
        +string category
    }

    class Social {
        +string label
        +string url
        +string icon
    }

    class ContactMessage {
        +string name
        +string email
        +string message
    }

    App --> Header
    App --> About
    App --> Skills
    App --> Hobbies
    App --> Favorites
    App --> Socials
    App --> Contact
    App --> Footer

    Skills ..> Skill
    Hobbies ..> Hobby
    Socials ..> Social
    Contact ..> ContactMessage
```
