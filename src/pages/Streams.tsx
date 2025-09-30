import { useState } from 'react';
import type { Stream } from '../types';

function Streams() {
    const [streams] = useState<Stream[]>([
        { id: 1, title: "Gaming Session Live", viewerCount: 1250, category: "Gaming" },
        { id: 2, title: "Art Stream - Digital Painting", viewerCount: 450, category: "Art" },
        { id: 3, title: "Music Production Tutorial", viewerCount: 320, category: "Music" }
    ]);

    return (
        <div className="page">
            <h1>Streams in Diretta</h1>
            <div className="streams-grid">
                {streams.map((stream: Stream) => (
                    <div key={stream.id} className="stream-card">
                        <h3>{stream.title}</h3>
                        <p>Categoria: {stream.category}</p>
                        <p>👁️ {stream.viewerCount} spettatori</p>
                        <button className="btn-primary">Unisciti allo Stream</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Streams;