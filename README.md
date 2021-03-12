### Server config instruction

- This project run with Docker. If Docker not installed yet. Please follow instruction at [install docker](https://docs.docker.com/get-docker/)
- Make sure we had stop current project by `docker-compose down` before pull repo or update content.

- Step 1:

  - Build frontend first
  - Make sure we have a build in `frontend/build`

  ```bash
  cd frontend && npm run build
  ```

- Step 2:
  - Modify `COMPOSE_PROJECT_NAME` in `.env` file by template `app_name_`
  - Rebuild whole project by run
  ```bash
  docker-compose up --build
  ```
