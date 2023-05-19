"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function demo(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get('/', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply.send({ message: "Hello Demo GET" });
        }));
        fastify.post('/', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply.send({ message: "Hello Demo POST" });
        }));
        fastify.get('/params', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const body = request.body;
            const username = body.username;
            const password = body.password;
            reply.send({ username, password });
        }));
    });
}
exports.default = demo;
//# sourceMappingURL=demo.js.map