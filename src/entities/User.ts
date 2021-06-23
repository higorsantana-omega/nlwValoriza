import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("users") // Decorator -> que representa uma tabela
// Tabela
class User {
    // Colunas
    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    admin: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        // Verificar se esta preenchido
        if (!this.id) {
            // Sempre que tiver um novo usuario, criar um novo uuid
            this.id = uuid()
        }
    }
}

export { User }
