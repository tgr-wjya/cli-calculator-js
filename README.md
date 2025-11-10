# WEEK 1: CALCULATOR

# MONTH 1: JAVASCRIPT

# DAY 1 AND 2

## BUILT

I built it with 4 arithmetic operation, could've been more honestly.

- Addition (+)
- Subtraction (-)
- Multiple (\*)
- Division (/)

## STRUGGLE

- Sometimes I'm still struggling with the indent, I really struggle a lot with it and thanks for **Prettier** for making my job easier.
- Loop logic is still a bit confusing for me, I had to take the necessary loop.
- At first I struggled with the data types handling but I'm more confident with it now.
- I need to be more **confident** and **used to** when writing comments. Let's hope that I could make this habitual

## EXPECTATION

- I was thinking of making my comments more emotional like in those video but this project isn't complex enough for me to be acting like that. I hope that the snippet that I write would justify me putting a comment like this:
  - `// This seems like a bad idea but it's fine for now`
  - `// This code didn't port easily. WTF does it do?`
  - Found the reference: ["the rapidly dwindling sanity of valve programmers as expressed through code comments"](https://youtu.be/k238XpMMn38?si=eoTtK37tNT1WQLQc)
- I'll make sure to understand classes because in theory I still don't get it. I know how it works but it just hard to stick the theory in my mind.

## DESIGN & FLOW

- I did use [Excalidraw](https://excalidraw.com/) to help me work on the flow, because I was lazy and I didn't want to write a flowchart. You can see the attachment in the directory here: [calculator-flowchart.png](./calculator-flowchart.png)
- I'll also be using [draw.io](https://www.drawio.com/) for the flowchart.

## TIME

- I spent 4 hours over the course of 2 days working on this. Clearly it's complex but I'd say not complex enough that it'd take a week.

## NEXT PROJECT

- **CSV Parser**: I definitely need to read what it is first before tackling working on it.

## HONORARY MENTION

- Did I ever tell you about the impressive extension that I had working on this project?
  - **Prettier** for parsing.
  - **Code Spell Checker** for checking my english spelling.
  - **Better Comments** for improving my comments, I'm still new to this so I might have use it or not at all, let's hope that's not the case.
  - **Todo Tree** for showing any TODO or FIXME, etc.
  - **Error lens** for highlighting the error, really helpful.
  - **Indent Rainbow** because I was confused with the indent, I decided to use this to make it easier for me.
- That was basically the list that helped me conquered this project.

## KEY TAKEAWAY

- Make sure you know what data types your conditional are comparing/checking to, to reduce prone to error.
- Using `prompt` automatically convert the value entered to `String` unless a datatype is specified. Example:

  - ```javascript
    // If not specified.
    let age = prompt("What's your age?, []");
    console.log(typeoff age) // string

    // A good habit to have
    let age = Number(prompt("What's your age?", []));
    console.log(typeoff age) // Number
    ```

  - If you didn't enforce it, **you might be wasting time looking all over the place wondering where it all went wrong where in reality it's just you misunderstanding the condition for your conditional.** (e.g., referencing `Number` when in reality it was `string`)

- **Semicolon** really doesn't matter in JS, now I'm wondering why I'm putting it in the first place. I might have to dig around and found out its impact.
- You don't need the square brackets for prompt, but it helps clarifies what the user need to input.

  - ```javascript
    let yourName = prompt("What's your name?", ["All Capital"]); // What's your name? [All Capital]
    console.log(yourName);
    ```

- You should improve the readability of your CLI with `\n`. It helps a lot.
- Use `new` to create an object in classes.
- As for `constructor` it helps you initialize the object with the existing parameter. If given an example, **it's like bolting the badge on to the object.**
- JS Syntax checking actually chill as fuck, I respect that. I could type gibberish and it wouldn't even complaint.
- While I do touched on `do while` loop, I didn't really get into the classic `for` loop.
- My Markdown skill actually isn't that bad, huh?

---

<div align=center>

_"Tegar Wijaya Kusuma - Backend Engineer"_

_9 - 10 November 2025_

_"My Journey To Mastering JavaScript/TypeScript"_

</div>
