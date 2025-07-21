import express, { Express, Router } from "express";
import { createServer, Server as HTTPServer } from "http";

export interface Settings {
  port: number;
  routes: Router;
}

export class Server {
  private settings: Settings;
  private app: Express = express();
  private httpServer?: HTTPServer;

  constructor(settings: Settings) {
    this.settings = settings;
    this.app;
  }

  async start(): Promise<void> {
    this.setUpMiddleware();
    this.app.use(this.settings.routes);
    this.httpServer = createServer(this.app);
    this.httpServer.listen(this.settings.port, () => console.info("Server has started on port:", this.settings.port));
  }

  private setUpMiddleware(): void {
    this.app.use(express.json());
  }
}
