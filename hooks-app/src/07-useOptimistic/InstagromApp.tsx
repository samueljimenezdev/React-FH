import { useOptimistic, useState, useTransition } from 'react';
import { toast } from 'sonner'

interface Comment {
    id: number;
    text: string;
    optimistic?: boolean;
}

export const InstagromApp = () => {

    /**
     * useTransition allows us to mark state updates as non-urgent.
     * This helps keep the UI responsive by allowing urgent updates to be processed first.
     * In this example, we use useTransition to handle the comment submission process,
     * so that the UI remains responsive while we simulate a network request.
     */
    const [isPending, startTransition] = useTransition();

    const [comments, setComments] = useState<Comment[]>([
        { id: 1, text: '¡Gran foto!' },
        { id: 2, text: 'Me encanta 🧡' },
    ]);

    let lastId = 2;


    /**
     * useOptimistic allow us to update the UI immediately with an optimistic update,
     * while we perform the actual update in the background.
     * This is useful for scenarios like adding comments, where we want to show the new comment
     * immediately, even if the server update might take some time.
     * In this example, we use useOptimistic to optimistically add a new comment to the list.
     */
    const [optimisticComments, addOptimisticComments] = useOptimistic(comments, (currentComments: Comment[], newCommentText: string) => {
        lastId++;
        return [...currentComments, {
            id: lastId,
            text: newCommentText,
            optimistic: true
        }]
    });

    const handleAddComment = async (formData: FormData) => {
        const message = formData.get('post-message')?.toString().trim();
        if (!message) return;

        addOptimisticComments(message);

        startTransition(async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));


            // Si no falla no se debe agregar nuevamente
            // console.log('Comentario enviado:', message);

            // setComments((prevComments) => [
            //     ...prevComments,
            //     { id: prevComments.length + 1, text: message },
            // ]);

            //! Si falla: 
            setComments((prevComments) => prevComments)
            toast('Error al enviar el comentario', {
                description: 'Por favor, intenta nuevamente más tarde.',
                duration: 10_000,
                position: 'top-right',
                action: {
                    label: 'Cerrar',
                    onClick: () => toast.dismiss(),
                }
            });
        });
    };

    return (
        <div className="bg-slate-700 h-screen flex flex-col items-center justify-center">
            {/* Post de ejemplo */}
            <div className="flex flex-col items-center justify-center bg-gray-300 rounded-t-3xl p-4 w-[500px]">
                <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop"
                    alt="Instagrom"
                    className="object-cover rounded-xl mb-4"
                />
                <p className="text-black font-bold mb-4">
                    Mira que interesante esta funcionalidad de la API de React.
                </p>
            </div>

            {/* Comentarios */}
            <ul className="flex flex-col items-start justify-center bg-gray-300 w-[500px] p-4">
                {optimisticComments.map((comment) => (
                    <li key={comment.id} className="flex items-center gap-2 mb-2">
                        <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                            <span className="text-white text-center">A</span>
                        </div>
                        <p className="text-black">{comment.text}</p>
                        {comment.optimistic && (
                            <span className="text-gray-500 text-sm">enviando... </span>
                        )}
                    </li>
                ))}
            </ul>

            {/* Formulario de comentarios */}
            <form
                action={(event: FormData) => handleAddComment(event)}
                className="flex flex-col items-center justify-center bg-gray-300 w-[500px] rounded-b-3xl p-4"
            >
                <input
                    type="text"
                    name="post-message"
                    placeholder="Escribe un comentario"
                    required
                    className="w-full p-2 rounded-md mb-2 text-black bg-white"
                />
                <button
                    type="submit"
                    disabled={isPending}
                    className="bg-blue-500 text-white p-2 rounded-md w-full"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};