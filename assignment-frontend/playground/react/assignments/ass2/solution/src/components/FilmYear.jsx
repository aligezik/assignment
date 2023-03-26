

function FilmYear({ data, filmIndex ,setFilmIndex}) {
  return (
    <div className="col-12 col-lg-1">
      <div
        className="nav nav-pills d-flex align-items-start "
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical">
        {data.map((item, i) => {
          return (
            <button
              className={`border-0 px-2 m-2 fs-4 fw-bold text-secondary ${
                i === filmIndex && "activeBtn"
              }`}
              id="v-pills-home-tab"
              type="button"
              role="tab"
              onClick={() => setFilmIndex(i)}>
              {item.date}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilmYear;
