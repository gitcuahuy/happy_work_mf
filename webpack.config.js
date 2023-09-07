// get share customer lib for resolver
export const getShareCustomerLib = () => {
  return {
    singleton: true,
    requiredVersion: '^0.0.1',
    import: 'projects/hp-share/src/public-api'
  }
}

const webpackConfig = {

}
export default webpackConfig
