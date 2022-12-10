import {signIn, signOut, useSession} from "next-auth/react";

export default function Component() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                Hello, {session.user?.name}. <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }

    return (
        <>
            Hello, please sign in. <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}
