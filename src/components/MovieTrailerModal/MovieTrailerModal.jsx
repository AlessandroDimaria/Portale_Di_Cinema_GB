import "./MovieTrailerModal.css";

export default function MovieTrailerModal({ trailerKey, backdrop, onClose }) {
  if (!trailerKey) return null;

  const backdropURL = backdrop
    ? `${import.meta.env.VITE_IMAGE_BASE_URL}${backdrop}`
    : null;

  return (
    <div className="trailer-modal-overlay" onClick={onClose}>
      {backdropURL && (
        <div
          className="trailer-modal-backdrop"
          style={{ backgroundImage: `url(${backdropURL})` }}
        ></div>
      )}

      <div
        className="trailer-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="trailer-iframe"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        <button className="trailer-close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
}
