import React, { use, type Usable } from 'react'
import { type User } from './api/get-user.action'



interface Props {
    getUser: Usable<User>;
}

export const ClientInformation = ({ getUser }: Props) => {

    /**
     * Use is a new React 18.4+ API to unwrap Usable values.
     * Use could be used into if, loops, nested functions, etc.
     * Use is not a hook, is an API to unwrap a Usable value.
     * It can be used multiple times.
     * It can be used conditionally.
     * It can be used anywhere in the component body.
     * It suspends the component until the value is resolved.
     * It works with Promises, Resources, and other Usable types.
     * It can be used with async functions.
     * It can be used with server components and client components.
     */
    const user = use(getUser);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h2 className="text-4xl font-thin text-white">{user.name} - #{user.id}</h2>

            <p className="text-white text-2xl">
                {user.location}
            </p>
            <p className="text-white text-xl">
                {user.role}
            </p>
        </div>
    )
}
