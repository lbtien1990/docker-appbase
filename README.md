### Server config instruction

- This project run with Docker. If Docker not installed yet. Please follow instruction at [install docker]()

- Step 1:

  - Build frontend first
  - Make sure we have a build in `frontend/build`

  ```bash
  cd frontend && npm run build
  ```

- Step 2:

  - Build the Dockerfile in folder backend with `image name`. Here I use `dockerapp`.

  ```bash
  docker build --rm -f "backend/Dockerfile" -t dockerapp:lastest "."
  ```

- Step 3:
  - After build success rebuild whole project by run
  ```bash
  docker-compose up --build
  ```
