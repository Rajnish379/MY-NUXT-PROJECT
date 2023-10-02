export const useUtils = () => {
    const sayHello = () => console.log("Hello from useutils");
    return {
        sayHello,
    };
}