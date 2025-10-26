/**
 * @param colour A bootstrap class that defines the colour of the badge.
 * @param text The text of the badge.
 * @returns Returns a span element that represents a badge given the bootstrap colour class and the text of the badge.
 */
function createBadge(colour: string, text: string): React.ReactNode {
    return <span className={"badge " + colour}>{text}</span>;
}

// Programming Languages
export const JAVA_BADGE: React.ReactNode = createBadge("text-bg-danger", "#Java");
export const JS_BADGE: React.ReactNode = createBadge("text-bg-info", "#JavaScript");
export const PYTHON_BADGE: React.ReactNode = createBadge("text-bg-warning", "#Python");
export const BOOTSTRAP_BADGE: React.ReactNode = createBadge("text-bg-secondary", "#Bootstrap")

// Types of Software Engineering
export const FRONT_END_BADGE: React.ReactNode = createBadge("text-bg-light border border-2", "#Front-End")
export const BACK_END_BADGE: React.ReactNode = createBadge("text-bg-light border border-2", "#Back-End")
export const FULL_STACK_BADGE: React.ReactNode = createBadge("text-bg-light border border-2", "#Full Stack")