interface BrokerProps {
    params: {
        slug: string;
    }
}

export default function Broker({ params }: BrokerProps) {
    return (
        <h1>Broker: {params.slug}</h1>
    )
}